import './App.css'
import React from "react"
import First from './First'
import WithProps from './WithProps'
import Fragment from './Fragment'
import Random from "./Random"
import Card from "../layout/Card"
import Family from './Family'
import FamilyMember from './FamilyMember'
import StudentList from '../repetition/StudentList'
import ProductList from '../repetition/ProductList'
import EvenOrOdd from '../conditional/EvenOrOdd'
import UserInfo from '../conditional/UserInfo'
import DirectDad from '../comunication/DirectDad'
import IndirectDad from '../comunication/IndirectDad'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>

        <Card
                title="#10 Comunicação inireta"
                color="lightcyan"
            >
                <IndirectDad />
            </Card>

            <Card
                title="#09 Comunicação Direta"
                color="cyan"
            >
                <DirectDad />
            </Card>

            <Card
                title="#08 Renderização condicional"
                color="lightblue"
            >
                <EvenOrOdd number={11}></EvenOrOdd>
                <UserInfo user={{ name: "" }}></UserInfo>
                <UserInfo user={{ name: "Hudson" }}></UserInfo>
            </Card>

            <Card
                title="#07 Desafio Repetiçao"
                color="purple"
            >
                <ProductList></ProductList>
            </Card>

            <Card
                title="#06 Repetiçao"
                color="pink"
            >
                <StudentList></StudentList>
            </Card>

            <Card
                title="#05 Componente com filhos"
                color="#008"
            >
                <Family sobrenome="Santos">
                    <FamilyMember nome="Hudson"></FamilyMember>
                    <FamilyMember nome="Aline"></FamilyMember>
                    <FamilyMember nome="Kelly"></FamilyMember>
                </Family>
            </Card>

            <Card
                title="#04 Número aleatório"
                color="#7900FF"
            >
                <Random
                    min={1}
                    max={60}
                />
            </Card>

            <Card
                title="#03 Fragmento"
                color="#548CFF"
            >
                <Fragment />
            </Card>

            <Card
                title='#02 Segundo componente'
                color="#93FFD8"
            >
                <WithProps title='Segundo componente' />
            </Card>

            <Card
                title='#01 Primeiro componente'
                color="#CFFFDC"
            >
                <First></First>
            </Card>
        </div>
    </div>