import React from 'react';

const About: React.FC = () => {
  return (
    <div className='max-w-4xl mx-auto space-y-8'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900'>关于我们</h1>
        <p className='mt-4 text-xl text-gray-600'>了解我们的故事、使命和团队</p>
      </div>

      <div className='bg-white rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>我们的使命</h2>
        <p className='text-gray-600 leading-relaxed'>
          我们致力于通过现代化的技术解决方案，帮助企业和个人实现数字化转型。
          通过不断创新和学习，我们为客户提供高质量的产品和服务。
        </p>
      </div>
    </div>
  );
};

export default About;
