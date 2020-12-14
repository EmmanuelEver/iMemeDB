import styled from "styled-components"


const Button = styled.button`
    padding: ${ ({big}) => ( big? "16px 40px" : "10px 32px" )};
    font-size: ${ ({big}) => ( big? "24px" : "16px" )};
    color: white;
    background: ${ ({bg}) => ( bg? bg : "lightblue" ) };
    border-radius: ${ ({round}) => ( round? "50px" : "5px" ) };
    outline: none;
    border:none;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: .3s !important;

    &:hover{
        transform: translateY(-1.5px);
    }
`

export default Button;