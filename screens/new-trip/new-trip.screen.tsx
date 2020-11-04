import React, { useRef, useState } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native';
import { Image } from 'react-native';
import Wizard from "react-native-wizard"
import { NewTripMargin, NewTripWrap, NextVacationInput, NextVacationText, SafeAreaViewWrap, WizardViewWrap } from './new-trip.styles'

export const NewTripScreen = () => {
    const [nextVaction, setNextVacation] = useState<string>('');
    const [vacationDate, setVacationDate] = useState<string>('1/1/2021')

    const wizard = useRef();
    const [isFirstStep, setIsFirstStep] = useState<boolean>(true);
    const [isLastStep, setIsLastStep] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(0)

    const stepList = [

        {
            content:
                <NewTripWrap>
                    <NextVacationText>Where is your next vacation ?</NextVacationText>
                    <NextVacationInput value={nextVaction} onChangeText={(value) => setNextVacation(value)} />
                </NewTripWrap>,
        },
        {
            content:
                <NewTripWrap>
                    <NextVacationText>When ?</NextVacationText>
                    <NextVacationInput value={vacationDate} onChangeText={(value) => setVacationDate(value)} />
                </NewTripWrap>
        },
        {
            content:
                <NewTripWrap>
                    <NextVacationText>Where is your next vacation ?</NextVacationText>
                    <NextVacationInput value={nextVaction} onChangeText={(value) => setNextVacation(value)} />
                </NewTripWrap>
        },
    ]

    return (

        <NewTripMargin>

            <WizardViewWrap>
                <Wizard
                    nextStepAnimation="slideRight"
                    ref={wizard}
                    steps={stepList}
                    isFirstStep={val => setIsFirstStep(val)}
                    isLastStep={val => setIsLastStep(val)}
                    onNext={() => {
                        console.log("Next Step Called")
                    }}
                    onPrev={() => {
                        console.log("Previous Step Called")
                    }}
                    currentStep={({ currentStep, isLastStep, isFirstStep }) => {
                        setCurrentStep(currentStep)
                    }}
                />

                <View style={{ flexDirection: "row", margin: 18 }}>
                    {stepList.map((val, index) => (
                        <View
                            key={"step-indicator-" + index}
                            style={{
                                width: 10,
                                marginHorizontal: 6,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: index === currentStep ? "#fc0" : "#000",
                            }}
                        />
                    ))}
                </View>
            </WizardViewWrap>
            <SafeAreaViewWrap>
                <Button disabled={isFirstStep} title="Prev" onPress={() => wizard.current.prev()} />
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>{currentStep + 1}. Step</Text>
                <Button disabled={isLastStep} title="Next" onPress={() => wizard.current.next()} />
            </SafeAreaViewWrap>
        </NewTripMargin>
    )
}
