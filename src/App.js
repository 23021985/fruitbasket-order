import React, {useState} from 'react';
import './App.css';
import Fruit from "./Fruit";
import foto from "./assets/screenshot-logo.png"
import {set, useForm} from "react-hook-form";



function App() {

    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const onSubmit = data => console.log(data);
    const selectedReferrer = watch("bezorgfrequentie");

    const [counterAardbei, setCounterAardbei] = React.useState(0);
    const [counterBanaan, setCounterBanaan] = React.useState(0);
    const [counterAppel, setCounterAppel] = React.useState(0);
    const [counterKiwi, setCounterKiwi] = React.useState(0);

    function resetCounter(){
        setCounterAardbei(0);
        setCounterBanaan(0);
        setCounterAppel(0);
        setCounterKiwi(0);
    }

        return (
            <>
                <header className={"App-header"}>
                    <img src={foto} alt="logo"/>
                </header>
                <br/>

                <div className="contentHolder">
                    <div className="form2">
                    <div
                        className={"Aardbeien"}>
                        <Fruit fruitName="Aardbeien"
                               fruitImg="🍓"
                               addFruit ={() => setCounterAardbei(counterAardbei + 1)}
                               count = {counterAardbei}
                               deleteFruit ={() => setCounterAardbei(counterAardbei - 1)}
                        />
                    </div>

                    <div className={"Bananen"}>
                        <Fruit fruitName="Bananen"
                               fruitImg="🍌"
                        addFruit ={() => setCounterBanaan(counterBanaan + 1)}
                        count = {counterBanaan}
                        deleteFruit ={() => setCounterBanaan(counterBanaan - 1)}
                        />
                    </div>

                    <div className={"Appels"}>
                        <Fruit fruitName="Appels"
                               fruitImg="🍏"
                        addFruit ={() => setCounterAppel(counterAppel + 1)}
                        count = {counterAppel}
                        deleteFruit ={() => setCounterAppel(counterAppel - 1)}
                        />
                    </div>

                    <div className={"Kiwi"}>
                        <Fruit fruitName="Kiwi's"
                               fruitImg="🥝"
                        addFruit ={() => setCounterKiwi(counterKiwi + 1)}
                        count = {counterKiwi}
                        deleteFruit ={() => setCounterKiwi(counterKiwi - 1)}
                        />
                    </div>

                    <button id={"reset"} type="reset" onClick={resetCounter}>Reset</button>
                </div>

                    <form className="form2" onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="voornaam" id="firstNameId">Voornaam
                            <input type="text" placeholder="Voornaam..." name="voornaam" id="voornaam" {...register("voornaam", {required: true, max: 25})}/>
                            {errors.voornaam && errors.voornaam.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <label htmlFor="achternaam" id="achternaamId">Achternaam
                            <input type="text" placeholder="Achternaam..." name="achternaam" id="achternaam" {...register("achternaam", {required: true, max: 25})}/>
                            {errors.achternaam && errors.achternaam.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <label htmlFor="age" id="ageId">Leeftijd
                            <input type="number" placeholder="Leeftijd..." name="age" id="age" {...register("age", {required: true, min: 18})}/>
                            {errors.age && errors.age.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <label htmlFor="postcode">Postcode
                            <input type="text" placeholder="1010AA" name="postcode" id="postcode" {...register("postcode", {required: true, max: 6})} />
                            {errors.postcode && errors.postcode.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <label htmlFor="huisnummer">Huisnummer
                            <input type="number" placeholder="123.." name="huisnummer" id="huisnummer" {...register("huisnummer", {required: true, min: 1})}/>
                            {errors.huisnummer && errors.huisnummer.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <div className="bezorgfrequentie">
                            <h3>Bezorgfrequentie</h3>
                            <label htmlFor="radio">Iedere week
                                <input type="radio" id="bezorgfrequentie" value="iedere week" name='iedere week'{...register("bezorgfrequentie", {required: true})}/>
                            </label>

                            <label htmlFor="radio">Om de week
                                <input type="radio" id="bezorgfrequentie" value="om de week" name='om de week' {...register("bezorgfrequentie", {required: true})}/>
                            </label>
                            <label htmlFor="radio">Iedere maand
                                <input type="radio" id="bezorgfrequentie" value="iedere maand" name='iedere maand' {...register("bezorgfrequentie", {required: true})}/>
                            </label>
                            <label htmlFor="radio">Anders
                                <input type="radio" id="bezorgfrequentie" value="anders" name='radio'  {...register("bezorgfrequentie", {required: true})}/>
                                {selectedReferrer === 'anders' && (
                                    <input
                                        type="text"
                                        {...register("andersTextField", { required: true })}
                                    />
                                )}
                            </label>
                            {errors.bezorgfrequentie && errors.bezorgfrequentie.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </div>

                        <h3>Opmerkingen</h3>
                        <label htmlFor="comments">
                        <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            cols="40"
                            placeholder="opmerkingen kunt u hier kwijt..."
                            {...register("comments", {required: false})}
                        />
                            {errors.comments && errors.comments.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <label htmlFor="checkBox"> check mij
                            <input type="checkBox" name="checkBox" id="checkBox"{...register("checkBox", {required: true})}/>
                            {errors.checkBox && errors.checkBox.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}
                        </label>

                        <label htmlFor="sendButton">
                            <button type="submit">Verstuur</button>
                        </label>

                    </form>
                </div>
            </>
        );
}
export default App;
