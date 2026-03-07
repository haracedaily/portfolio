#VITE + REACT

Full-page scroll 인터랙션을 구현하기 위해 scrollTop 기반의 커스텀 스크롤 로직을 구현했습니다.

라이브러리 없이 직접 제어하는 방식으로 구현하여 스크롤 동작과 화면 전환 로직을 직접 설계해보는 것을 목표로 했습니다.
useRef를 이용해 DOM scroll을 제어하고
viewport height 기준으로 섹션 이동을 계산하도록 설계했습니다.
