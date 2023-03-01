# 📌 Hajung-Shop

## 👋🏻 Introduce
API 호출 및 비동기 처리 연습을 위해 가짜 API서버를 구축하여  만든 쇼핑몰

<br />

## 🚀 Distribution Link
👉 [hajung-shop 사이트 바로가기](https://hajung-shop.herokuapp.com/)

<br />

## 🗓️ Develop Period
2022.12 ~ 2023.02

<br />

## 🕶️ Preview 
|Desktop View|Tablet View|Mobile View|
|---|---|---|
|<img src="https://user-images.githubusercontent.com/66300154/219934733-c2080742-8502-47e0-bf46-3da39b0c8ea7.png" width="350" height="200"/>|<img src="https://user-images.githubusercontent.com/66300154/219934761-84c79bfe-06bd-4e1f-8d15-6e65f5a71f4d.png" width="350" height="300"/>|<img src="https://user-images.githubusercontent.com/66300154/219934798-3b1bf764-f67e-42ae-bb62-4b1111a7be25.png" width="280" height="300"/>|

<br />

## ⚙️ Installation
```
$ git clone https://github.com/hajung00/react-shopping-mall.git
$ npm i
```    
      
### Json-server
```
$ npm run start
```   
      
### Frontend
```
$ npm run start:dev
```      
<br />

## 🛠️ Technology stack

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">  <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">    <img src="https://img.shields.io/badge/redux-999999?style=for-the-badge&logo=redux&logoColor=white">  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> 

<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">

<br />

## 📝 Service Logic
<img src="https://user-images.githubusercontent.com/66300154/222103622-6e1fd14a-0d3f-4c6f-9a58-5fbbb4772df0.png" width='750' height='300'>

<br />

## 💻 Function
### 1. 로그인 & 회원가입 페이지
|View|Function|
|---|-----|
|<img src="https://user-images.githubusercontent.com/66300154/219935431-f675b053-ba95-492a-ba7a-f1bdb36a762b.gif" width="450" height="280"/>|- **비밀번호 및 동의항목 체크 확인** </br></br> - **회원가입** </br></br> - **로그인**|

### 2. 메인 페이지
|View|Function|
|---|---|
|<img src="https://user-images.githubusercontent.com/66300154/219935462-97ee0ce1-e3dc-4c53-a986-e8a73812e523.gif" width="450" height="280"/>|- **상품 검색 기능**</br></br>- **카테고리별 상품 목록 불러오기**</br></br>- **상품 클릭시, 상세 페이지로 이동** </br></br> - **배너 클릭시 해당 이벤트 페이지로 이동**|


### 3. 상세 페이지
|View|Function|
|---|---|
|<img src="https://user-images.githubusercontent.com/66300154/219935488-9268b8f4-7a58-4e2f-9c2d-cd8efed07b01.gif" width="450" height="280"/>| - **클릭한 상품 상세 페이지**</br></br> - **최근 본 상품 로컬스토리지를 이용해 목록 띄우기**</br></br> - **장바구니에 추가 후 이동 여부 alert로 띄우기** </br></br>- **Detail, Review, QnA**</br></br> - **QnA 작성 가능**|


### 4. 장바구니 페이지
|View|Function|
|---|---|
|<img src="https://user-images.githubusercontent.com/66300154/222093274-558e9b97-0a3a-4056-aa6e-910ea45a80b0.gif" width="450" height="280"/>|- **장바구니에 담은 상품 정보 목록**</br></br> - **상품 수량 변경**</br></br> - **선택 체크 시, 수량과 상품 가격 계산 후 총액 표시** </br></br> - **주문하기 누르면 주문 금액 alert 띄우기**|



