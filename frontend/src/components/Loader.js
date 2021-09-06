import './Loader.css'

const Loader = () => {
  return (
    <div className="LoaderContainer">
      <div className="loader">
        <div className="gear one">
          <svg id="blue" viewBox="0 0 100 100" filter="url(#shadow1)" fill="url(#grad1)">
            <defs>
              <filter id="shadow1">
                <feDropShadow dx="0" dy="0" stdDeviation="2"
                  floodColor="#ccc" />
              </filter>
              <radialGradient id="grad1">
                <stop offset="10%" stopColor="#aaa" />
                <stop offset="20%" stopColor="#888" />
                <stop offset="40%" stopColor="#bebebe" />
                <stop offset="60%" stopColor="#d1d1d1" />
                <stop offset="75%" stopColor="#aaa" />
                <stop offset="95%" stopColor="#ddd" />
                <stop offset="100%" stopColor="#bbb" />
              </radialGradient>
            </defs>
            <path stroke="#999" strokeWidth=".3px" d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
          </svg>
        </div>
        <div className="gear two">
          <svg id="pink" viewBox="0 0 100 100" filter="url(#shadow2)" fill="url(#grad2)">
            <defs>
              <filter id="shadow2">
                <feDropShadow dx="0" dy="0" stdDeviation="5"
                  floodColor="#dcdcdc" />
              </filter>
              <radialGradient id="grad2">
                <stop offset="10%" stopColor="#aaa" />
                <stop offset="20%" stopColor="#888" />
                <stop offset="40%" stopColor="#bebebe" />
                <stop offset="60%" stopColor="#d1d1d1" />
                <stop offset="70%" stopColor="#bebebe" />
                <stop offset="80%" stopColor="#ccc" />
                <stop offset="95%" stopColor="#ccc" />
                <stop offset="100%" stopColor="#bbb" />
              </radialGradient>
            </defs>
            <path stroke="#eee" strokeWidth="1px" d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
          </svg>
        </div>
        <div className="gear three">
          <svg id="yellow" viewBox="0 0 100 100" fill="url(#grad3)" filter="url(#shadow3)">
            <defs>
              <filter id="shadow3">
                <feDropShadow dx="0" dy="0" stdDeviation="2"
                  floodColor="#ffebc1" />
              </filter>
              <radialGradient id="grad3">
                <stop offset="0%" stopColor="#8a785b" />
                <stop offset="25%" stopColor="#beb08e" />
                <stop offset="45%" stopColor="#ffebc1" />
                <stop offset="60%" stopColor="#cfc09f" />
                <stop offset="80%" stopColor="#b8a988" />
                <stop offset="100%" stopColor="#ffecb3" />
              </radialGradient>
            </defs>
            <path stroke="#8a785b" strokeWidth=".5px" d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
          </svg>
        </div>
      </div>
      <div className="text">loading...</div>
    </div>
  )
}

export default Loader