import React from "react";

export default () => {
    return (
        <div>
            <span onClick={() => alert(66666)}>This is sanyuan</span>
        </div>
    )
}


/****
 现在的任务就是将它转换为html代码返回给浏览器。
 总所周知，JSX中的标签其实是基于虚拟DOM的，
 最终要通过一定的方法将其转换为真实DOM。
 *****/