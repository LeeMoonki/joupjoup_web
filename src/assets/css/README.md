# naming convention using BEM

* BolckName__ElementName--Modifier
    * 이름이 길 경우 단일 하이픈으로 연결한다. 예를 들어 SideNavigation -> side-navigation
```css
/* examples */

.btn__next--on {  } /* 다음 버튼 활성화 */
.btn__next--off {  } /* 다음 버튼 비활성화 */

.form__submit {  } /* submit 버튼 */

.btn__level-up--on {  } /* 레벨-업 버튼 활성화 */
.btn__level-up--off {  } /* 레벨-업 버튼 비활성화 */

.layout-nav__bg {  } /* 레이아웃-네비게이션 배경 */
```