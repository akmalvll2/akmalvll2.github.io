<html>
<head>
	<style>
    	body {
          background-color:ghostwhite;
        }
        .title {
          text-align:center;
          text-transform:uppercase;
          padding:10px;
          transform:skew(-20deg);
        }
        ul{
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: black;
          border-radius: 20px;
          border-style:solid;
          transition:outline 0.6s linear;
        }
        li {
          float:left;
        }
        li a {
          display: block;
          color: white;
          text-align:center;
          padding: 14px 16px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: smaller;
        }
        li:hover {
          border-bottom:1px solid orange;
          cursor:pointer;
          transition:border-bottom 0.5s ease;
        }
        li a:hover {
          color:orange;
          transition:color 0.5s ease;
        }
        .right {
          padding-right: 10px;
          float:right;
        }
        li:active {
          transform:translateY(1px);
        }
        .main-content {
          margin-top: 5px;
          border-radius: 20px;
          display:block;
          background-color: white;
          box-shadow:1px 1px gray;
          height: 100%;
          padding: 10px;
          font-family:stencil std,fantasy;
        }
        .content-title {
          text-align:center;
          text-transform:uppercase;
        }
    </style>
</head>
<body>
  <h2 class="title">title</h2>
  <ul>
    <li><a>home</a></li>
    <li><a>about</a></li>
    <li><a>contact</a></li>
    <li class="right"><a>sign in</a></li>
  </ul>
  <div class="main-content">
  	<h2 class="content-title">content title</h2>
  	<p>example message..</p>
  </div>
</body>
</html>
