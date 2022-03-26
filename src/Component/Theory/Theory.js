import React from 'react';
import './Theory.css';

const Theory = () => {
    return (
        <div className='theory-container'>
            <div className='theory'>
                <h1>Q1.How useState() works?</h1>
                <p>
                    useState()-হল একটি হুক যা আপনাকে কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল থাকতে দেয় বা এক বা একাধিক স্টেট ভেরিয়েবল ঘোষণা করতে দেয়।
                    Hook-এর নিচে React এই state variable-এর ট্র্যাক করে রাখে এবং এর সাথে নিশ্চিত করে যে , তারা কি component-এর পরবর্তী Re-render-এ Up-To-Date থাকতে পারবে কি না।
                    আবার,React-এর দু ধরণের উপাদান রয়েছে , যার মধ্যে একটি হল class components যা ES6 ক্লাসকে প্রতিক্রিয়া থেকে বিস্তৃত করে এবং অন্যটি হল functional components ।
                    ক্লাস উপাদান এমন একটি উপাদান যেখানে state এবং lifecircle পদ্ধতি থাকতে পারে - যা ক্লাস বার্তার প্রতিক্রিয়া প্রসারিত করে।
                    useState()- হুক হল একটি বিশেষ ফাংশন যা একটি আর্গুমেন্ট হিসাবে প্রাথমিক অবস্থা নেয় এবং দুটি এন্ট্রির একটি অ্যারে ফেরত দেয়।
                </p>
            </div>
            <div className='theory'>
                <h1>Q2.What is the difference between props vs state?</h1>
                <p>
                    Props শুধুমাত্র পঠনযোগ্য কিন্তু State পরিবর্তনগুলি অ্যাসিঙ্ক্রোনাস হতে পারে।
                    Props-গুলি পরিবর্তন করা যাবে না, কারণ সেগুলি immutable (অপরিবর্তনীয়) কিন্তু This.setState ব্যবহার করে State পরিবর্তন করা যেতে পারে।
                    Functional এবং class উভয় components, Props ব্যবহার করে উপকৃত হতে পারে কিন্তু শুধুমাত্র class components, State ব্যবহার করতে পারে।
                    Parents-এর components children components-গুলির জন্য Props সেট করে তবে ইভেন্ট হ্যান্ডলাররা সাধারণত State আপডেট করার জন্য দায়ী।
                    Props-গুলি একটি components-এর মাধ্যমে children-এর কাছে ডেটা এবং ইভেন্ট হ্যান্ডলার পাঠাতে ব্যবহৃত হয়, তবে components-গুলির ডেটা যা এটিকে উপস্থাপন করতে হবে তা State-এর ভিউ সংরক্ষণ করে।
                </p>
            </div>
        </div>
    );
};

export default Theory;