import connectDB from '@/db/connectDb';
import userModel from '@/app/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Ensure connection to the database
connectDB();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if the user exists
    let user = await userModel.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'No users Exist' }), { status: 400 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 400 });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });

    // Send token in cookie (no HttpOnly so it can be accessed by the client-side for checking)
    const response = new Response(
      JSON.stringify({ success: true, user: { name: user.name, email: user.email } }),
      { status: 200 }
    );
    response.headers.set(
      'Set-Cookie',
      `token=${token}; Path=/; Max-Age=3600; SameSite=Lax` // Ensure token is available across all routes
    );

    return response;
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(JSON.stringify({ message: 'Invalid Email or Password'}), { status: 500 });
  }
}
