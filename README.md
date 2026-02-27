# John Doe Personal Blog - Next.js Migration

이 프로젝트는 기존의 정적 HTML/CSS 프로젝트를 **Next.js (App Router)** 기반으로 마이그레이션한 결과물입니다.

## 주요 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: React 19

## 시작하기

프로젝트를 로컬에서 실행하려면 다음 단계를 따르세요.

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
다음 스크립트를 사용하여 개발 서버를 실행할 수 있습니다.

- **Windows**: `dev.bat` 파일을 더블 클릭하거나 실행하세요.
- **Linux/macOS**: `bash dev.sh` 또는 `./dev.sh`를 실행하세요.
- **CLI**:
  ```bash
  npm run dev
  ```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

## 프로젝트 구조

- `src/app/`: 페이지 구성 (Home, Archive, Article)
- `src/components/`: 재사용 가능한 UI 컴포넌트 (Navbar, Footer)
- `public/`: 이미지 및 폰트 에셋
- `src/app/globals.css`: Tailwind v4 테마 및 전역 스타일 설정

## 주요 페이지
- **Home (`/`)**: 메인 랜딩 페이지 및 주요 포스트
- **Writing (`/archive`)**: 전체 글 목록 및 필터링
- **Article (`/article`)**: 상세 포스트 페이지

## 기타 스크립트
- `npm run build`: 프로덕션 빌드 생성
- `npm run start`: 빌드된 앱 실행
- `npm run lint`: 린트 체크
