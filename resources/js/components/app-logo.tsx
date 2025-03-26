import styled from "styled-components"
import AppLogoIcon from './app-logo-icon';

const LogoText = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`

export default function AppLogo() {
    return (
        <>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left">
                <span className="mb-0.5 truncate leading-none font-semibold">
                     <LogoText>Momentia</LogoText>
                </span>
            </div>
        </>
    );
}
