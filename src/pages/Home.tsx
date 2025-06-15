import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='space-y-8'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl'>
          欢迎来到我的项目
        </h1>
        <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
          这是一个现代化的React应用，使用了最新的技术栈和最佳实践。
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>快速开发</h3>
          <p className='text-gray-600'>
            使用现代化的工具链，提供高效的开发体验和快速的构建速度。
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>类型安全</h3>
          <p className='text-gray-600'>
            TypeScript提供完整的类型支持，确保代码质量和开发效率。
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>美观设计</h3>
          <p className='text-gray-600'>
            采用Tailwind CSS，提供现代化的设计风格和响应式布局。
          </p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-center text-white'>
        <h2 className='text-2xl font-bold mb-4'>开始您的项目之旅</h2>
        <p className='text-lg mb-6 opacity-90'>
          立即开始使用我们的平台，体验现代化的开发流程。
        </p>
        <button className='bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200'>
          立即开始
        </button>
      </div>
    </div>
  );
};

export default Home;
