console.log("我是main.js 666");
//ajax请求css
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //下载完了
      if (request.status >= 200 && request.status < 300) {
        //下载成功
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.open("GET", "/style.css");
  //   request.onload = () => {
  //     console.log("request.response");
  //     console.log(request.response);

  //     const style = document.createElement("style");
  //     style.innerHTML = request.response;
  //     document.head.appendChild(style);
  //   };
  //   request.onerror = () => {
  //     console.log("失败了");
  //   };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./2.js");
  request.onload = () => {
    console.log("request.response");
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      console.log("object", object);
      myName.textContent = object.name;
    }
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element.id;
        xxx.appendChild(li);
      });
    }
  };
  request.send();
  n += 1;
};
