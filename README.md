**Randomly**
A real-time chat application where users can connect and chat anonymously with strangers. Built with Next.js, Tailwind CSS, MongoDB, Express, and Socket.IO, this application offers a smooth and engaging user experience.

************************************************************************************
Note:

This is the Next.js part of the app. The socket server is in different repo.
Socket Server Repo: https://github.com/webd-rupam/Randomly-SocketServer
*************************************************************************************

Features:
>🌐 Real-time Chat: Instant messaging using WebSocket technology through Socket.IO.
>👤 Anonymous Messaging: Chat without revealing personal information. Each user is assigned a unique ID.
>📱 Responsive Design: Fully responsive for optimal experience on mobile and desktop devices.
>✨ User-Friendly Interface: Clean and modern UI built with Tailwind CSS for easy navigation.

Authentication and Authorization:
>🔑 Token-Based Authentication: Implementing JWT (JSON Web Tokens) for secure user authentication. Users receive a token upon signup for subsequent requests.
>🔒 Protected Routes: Certain routes require authentication, ensuring only logged-in users can access them.

Technologies Used:
>⚛️ Next.js: Framework for server-rendered React applications, supporting static generation and server-side rendering.
>🎨 Tailwind CSS: Utility-first CSS framework for rapid UI development.
>🗄️ MongoDB (Atlas): NoSQL database for storing user data and chat history.
>⚙️ Express: Web application framework for Node.js, providing robust routing and middleware capabilities.
>💬 Socket.IO: Enables real-time, bidirectional communication between clients and servers for instant chatting.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
