import styled from "styled-components"
import { Home, Search, PlusSquare, Heart, Compass, Film, MessageCircle } from "lucide-react"
import { Link } from '@inertiajs/react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const SidebarContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 220px;
    border-right: 1px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    background-color: white;
`

const Logo = styled.div`
    margin-bottom: 24px;
    padding: 4px 12px;
    display: flex;
    align-items: center;
`

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

const NavItem = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    margin-bottom: 4px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f5f5f5;
    }
`

const NavText = styled.span`
    margin-left: 12px;
    font-size: 16px;
`

export default function Sidebar() {
    return (
        <SidebarContainer>
            <Logo>
                <Link href="/">
                    <LogoText>momentia</LogoText>
                </Link>
            </Logo>

            <NavItem>
                <Link href="/" className="flex items-center w-full">
                    <Home size={24} />
                    <NavText>홈</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/search" className="flex items-center w-full">
                    <Search size={24} />
                    <NavText>검색</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/explore" className="flex items-center w-full">
                    <Compass size={24} />
                    <NavText>탐색</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/reels" className="flex items-center w-full">
                    <Film size={24} />
                    <NavText>릴스</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/messages" className="flex items-center w-full">
                    <MessageCircle size={24} />
                    <NavText>메시지</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/notifications" className="flex items-center w-full">
                    <Heart size={24} />
                    <NavText>알림</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/create" className="flex items-center w-full">
                    <PlusSquare size={24} />
                    <NavText>만들기</NavText>
                </Link>
            </NavItem>

            <NavItem>
                <Link href="/profile" className="flex items-center w-full">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                        <LazyLoadImage src="/placeholder.svg?height=24&width=24" alt="Profile" width={24} height={24} effect="blur" />
                    </div>
                    <NavText>프로필</NavText>
                </Link>
            </NavItem>
        </SidebarContainer>
    )
}
