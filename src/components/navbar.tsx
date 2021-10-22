import {useState} from 'react'
import styled, { keyframes } from 'styled-components'

interface INv {
    shadow: string;
}

const NavbarContainer = styled.div<INv>`
    position: fixed;
    padding-top: 20px;
    z-index: 2;
    width: 100vw;
    height: 70px;
    background-color: white;
    animation: ${props =>
    (props.shadow === 'default' ?
    null : props.shadow === 'shadow'?
        toShadow : toNoShadow)
    } .3s forwards;
`
const toShadow = keyframes`
    from{
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.041);
    }
    to{
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.08);;
    }
`

const toNoShadow = keyframes`
    from{
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.08);; 
    }
    to{
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.041);;
    }
`

function Navbar(){
    const [shadow, setShadow] = useState<string>('default')
    const [notFirstTime,setNotFirstTime] = useState<boolean>(false)


        
        const toShadow = () => {
        if(window.scrollY >= 100){
            setShadow('shadow')
            setNotFirstTime(true)
        } else if (notFirstTime && window.scrollY <= 100) {
            setShadow('noShadow')
        }}
        

        window.addEventListener('scroll', toShadow)
   


    

    return(
        <NavbarContainer shadow={shadow}>
            <div className="navbar">
                <h3>Jordi Davesa</h3>
            </div>
        </NavbarContainer>
    )
}

export default Navbar