import React from 'react';
import './QandA.css'

const QandA = () => {
    return (
        <div className='main-q-n-a-style'>
            <div className='q-n-a-style'>
            <h3>Question-1: How react works?</h3>
            <p>Answer: React হলো javascript library যেটি declarative কোডের মাধ্যমে user interface তৈরী করে। Declrarative code দিয়ে component তৈরী করা হয়। Components হলো REUSABLE UI যেটি app কে বিভিন্ন ব্লকে বিভক্ত করে। Component prop নামক ডেটা নিয়ে সেটিকে UI তে represent করে। Props এর মাধ্যমে components একে অপরের মধ্যে ডেটা স্থানান্তর করে complex type ui তৈরী করতে পারে। SPA(Single Page Application) তৈরী তে React ব্যবহার করা হয়। মূলত জটিল কাজের কিন্তু সহজভাবে একটি website এর UI তৈরী তে React দারুন ভূমিকা পালন করে।</p>
            </div>
            <div className='q-n-a-style'>
            <h3>Question-2: What is the differences between State & Props?</h3>
            <p>Answer: <br /> <br />
                <li>যে ডেটা component থেকে UI তে দেখানোর প্রয়োজন পরে State সেই ডেটাটি store করে রাখে। </li>
                <li>Props ব্যবহার করা হয় ডেটা এবং Event Handler কে Children component এ পাঠানোর জন্য। </li>
                <br /> <br />
                <li>State এর ডেটা পরিবর্তন হতে পারে।</li>
                <li>Props এর ডেটা পরিবর্তন হতে পারে না।</li>
                <br /> <br />
                <li>State শুধুমাত্র class component এ ব্যবহার করা যায়।</li>
                <li>Props class এবং functional উভয় component এ ব্যবহার করা যায়।</li>
                <br /> <br />
                <li>State, child component এর মাধ্যমে access করা যায়না।</li>
                <li>Props, child component এর মাধ্যমে access করা যায়।</li>
                <br /> <br />
                <li>State, component কে পুনরায় ব্যবহারযোগ্য করতে পারেনা।</li>
                <li>Props, component কে পুনরায় ব্যব্যহারযোগ্য করে তুলে।</li>


            </p>
            </div>
        </div>
    );
};

export default QandA;