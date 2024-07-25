.block__early-payments {
	width: 792px;
	display: flex;
}
.block__early-payments-left {
	width: 219px;
	background: #fbfbfc url(bg-payments-left.png) no-repeat;
	display: inline-block;
	height: 500px;
	background-position: 0 120px;
}
.block__epl-title{
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-transform: uppercase;
	color: #4BA440;
	width: 100%;
    display: block;
    padding-top: 28px;
    padding-left: 20px;
}
.block__epl-balace {
	background: url(cil_wallet.svg) no-repeat;
	margin-left: 20px;
    margin-top: 15px;
    padding-left: 45px;
    min-height: 33px;
}
.block__epl-rub{
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	color: #4AA440;
	width: 100%;
    display: block;
}
.block__epl-usd{
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 8px;
	color: #8D93A0;
}
.block__early-payments-right {
	width: 573px;
	background: #fff;
	display: inline-block;
	padding: 30px;
}
.block__epr-title {
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-transform: uppercase;
	color: #11223E;
	width: 100%;
    display: block;
    margin-bottom: 10px;
}
.block__epr-form-summ {
	width: 100%;
	display: flex;
    align-items: center;
}
.block__epr-form-input {
	min-width: 108px;
	max-width: 108px;
	position: relative;
}
.block__epr-form-input input{
	background: #FFFFFF !important;
    border: 1px solid #E7E8EB;
    box-sizing: border-box;
    -webkit-border-top-left-radius: 3px;
	-webkit-border-bottom-left-radius: 3px;
	-moz-border-radius-topleft: 3px;
	-moz-border-radius-bottomleft: 3px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
    width: 100%;
    font-size: 14px;
	line-height: 19px;
	border-right: 0;
	color: #070707;
    padding-left: 27px;
	position: relative;
}
.block__epr-form-input:after {
	content: "";
    position: absolute;
    left: 13px;
    top: 12px;
    width: 9px;
    height: 19px;
    background: url(usd.svg) no-repeat;
    z-index: 1;
}
.block__epr-form-subinput {
	min-width: 125px;
	position: relative;
	left: -1px;
    max-width: 125px;
    background: #F2F2F2;
    border: 1px solid #E7E8EB;
    box-sizing: border-box;
    -webkit-border-top-right-radius: 3px;
	-webkit-border-bottom-right-radius: 3px;
	-moz-border-radius-topright: 3px;
	-moz-border-radius-bottomright: 3px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
    display: flex;
    align-items: center;
    padding-left: 27px;
    font-size: 14px;
    line-height: 19px;
    color: #88909E;
    min-height: 35px;
}
.block__epr-form-subinput:after {
	content: "";
    position: absolute;
    left: 13px;
    top: 12px;
    width: 9px;
    height: 19px;
    background: url(rub.svg) no-repeat;
}
.block__epr-form-comments {
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	margin-left: 21px;
	color: #88909E;
}
.block__epr-form-checked {
	width: 100%;
	display: flex;
    align-items: center;
    margin-top: 15px;
}
.block__epr-form-checked-title {
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	color: #1E1E1E;
	margin-left: 7px;
}
.mt42 {
	margin-top: 42px;
}
.block__epr-form-type-payments {
	width: 100%;
	display: flex;
    align-items: center;
    justify-content: space-between;
}
.block__epr-ftp-items {
	background: #FFFFFF;
	border: 1px solid #E7E8EB;
	box-sizing: border-box;
	border-radius: 3px;
	height: 55px;
    width: 165px;
	display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
	-webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.block__epr-ftp-items:hover {
	opacity: 0.7;
	-webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.block__epr-ftp-items.active {
	border: 1px solid #4BA440;
}
.block__epr-form-bill {
	width: 100%;
	display: flex;
    align-items: center;
    justify-content: space-between;
}
.block__epr-ftb-items {
	background: #F2F2F2;
	border: 1px solid #E7E8EB;
	box-sizing: border-box;
	border-radius: 5px;
	height: 102px;
    width: 163px;
	display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
	-webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
    display: none;
}
.block__epr-ftb-items.visible {
    display: flex;
}
.block__epr-ftb-items.ftb-added{
	background: #fff;
	border: 1px dashed #E7E8EB;
    display: flex;
}
.block__epr-ftb-items.active {
	background: #4BA440;
}
.block__epr-ftb-items:hover {
	opacity: 0.7;
	-webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.ftb-added-block {
	background: #F2F2F2;
    border: 1px solid #E7E8EB;
    box-sizing: border-box;
    border-radius: 3px;
    margin: 10px;
    width: 143px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.block__epr-ftb-title {
	position: absolute;
	left: 13px;
	top: 10px;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 19px;
	text-transform: uppercase;
	color: #88909E;
	opacity: 0.7;
}
.block__epr-ftb-items.active .block__epr-ftb-title {
	color: #fff;
	opacity: 0.7;
}
.block__epr-ftb-logo {
	width: 24px;
	height: 24px;
	display: block;
	position: absolute;
	right: 13px;
	top: 10px;
	background-size: cover;
}
.block__epr-ftb-number {
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-transform: uppercase;
	color: #88909E;
	position: absolute;
	left: 13px;
	bottom: 10px;
}
.block__epr-ftb-items.active .block__epr-ftb-number {
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-transform: uppercase;
	color: #FFFFFF;
	position: absolute;
	left: 13px;
	bottom: 10px;
}
.block__epr-ftb-logo.wm{
	background: url(webmoney-logo-noactive.svg) no-repeat;
}
.block__epr-ftb-items.active .block__epr-ftb-logo.wm{
	background: url(webmoney-logo-active.svg) no-repeat;
}
.block__epr-ftb-logo.px{
	background: url(paxum-logo-noactive.svg) no-repeat;
	background-position: center;
    width: 60px;
}
.block__epr-ftb-items.active .block__epr-ftb-logo.px{
	background: url(paxum-logo-active.svg) no-repeat;
	background-position: center;
    width: 60px;
}
.block__epr-ftb-logo.ep{
	background: url(epayservice-logo-noactive.svg) no-repeat;
	background-position: center;
    width: 60px;
    background-size: contain;
}
.block__epr-ftb-items.active .block__epr-ftb-logo.ep{
	background: url(epayservice-logo-active.svg) no-repeat;
	background-position: center;
    width: 60px;
    background-size: contain;
}
.block__epr-form-submit {
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
}
.block__epr-form-btnsubmit {
	background: #4BA440;
	border: 1px solid #4BA440;
	box-sizing: border-box;
	border-radius: 3px;
	font-size: 13px;
	line-height: 18px;
	text-align: center;
	color: #FFFFFF;
	width: 163px;
	height: 35px;
	-webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.block__epr-form-btnsubmit:hover {
	opacity: 0.8;
	-webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
}