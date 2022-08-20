import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerOneAC } from '../../redux/actions/PlayersAction';

export default function PlayerOneForm() {
  // cоздаем dispatch
  const dispatch = useDispatch();

  const nameFirst = useSelector((state) => state.playerfirst.playerFirst);
  console.log(nameFirst);

  // Хендлер на изменение импута
  // const changeHandler = (e) => {
  //     setPlayerOneAC((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setPlayerOneAC(e.target.namefirst.value));
    console.log(e.target.name.value);
  };
  return (
    <div>
      <div>
        please fill the name of the first player
      </div>
      <form
        name="playerfirstform"
        onSubmit={submitHandler}
      >
        <input
          name="namefirst"
        //   autoComplete="user-name"
          placeholder={nameFirst}
        //   type="name"
        //   value={nameFirst}
        //   onChange={(e) => e.target.namefirst.value}
        />
        <button
          type="submit"
        >
          Remember me
        </button>
      </form>
      <div className="mini_container">
        <div className="desc">
          Player 1:
          {nameFirst}
        </div>
      </div>
    </div>
  );
}
