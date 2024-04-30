h1 {
  margin-bottom: 10px;
}
.sp-card{
	margin-top: 32px;
    margin-bottom: 32px;
    padding: 16px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
	
}

input[type="text"] {
  width: 400px;
  float: left;
}
.narrow-button {
  float: left;
  margin-left: 10px;
}
.loader {
  display: none;
  margin-left: 5px;
  font-size: 10px;
  float: left;
  border-top: 1.1em solid rgba(147, 147, 147, 0.2);
  border-right: 1.1em solid rgba(147, 147, 147, 0.2);
  border-bottom: 1.1em solid rgba(147, 147, 147, 0.2);
  border-left: 1.1em solid #676767;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 3em;
  height: 3em;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
