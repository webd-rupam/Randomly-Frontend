import connectDB from '@/db/connectDb';
import userModel from '@/app/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Ensure connection to the database
connectDB();

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Check if the user exists
    let user = await userModel.findOne({ email });
    if (user) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token in cookie
    const response = new Response(
      JSON.stringify({ success: true, user: { name: newUser.name, email: newUser.email } }),
      { status: 200 }
    );
    response.headers.set(
      'Set-Cookie',
      `token=${token}; Path=/; Max-Age=3600; SameSite=Lax`
    );

    return response;
  } catch (error) {
    console.error('Error during signup:', error);
    return new Response(JSON.stringify({ message: 'Error during signup' }), { status: 500 });
  }
}
