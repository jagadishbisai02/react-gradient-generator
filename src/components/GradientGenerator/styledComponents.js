import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  line-height: 1.5;
`

export const DirectionDescription = styled.p`
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const GradientDirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickersDescription = styled.p`
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding: 12px 24px;
  margin-left: 0px;
  margin-bottom: 25px;
  margin-top: 10px;
  outline: none;
  cursor: pointer;
`
