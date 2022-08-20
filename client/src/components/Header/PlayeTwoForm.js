import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerSecondAC } from '../../redux/actions/PlayersAction';

export default function PlayeTwoForm() {
  const dispatch = useDispatch();
  const nameSecond = useSelector((state) => state.playersecond.playerSecond);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setPlayerSecondAC(e.target.namesecond.value));
  };
  return (
    <div>
      <div>
        please fill the name of the second player
      </div>
      <form
        name="playersecondform"
        onSubmit={submitHandler}
      >
        <input
          name="namesecond"
        //   autoComplete="user-name"
          placeholder={nameSecond}
        //   onChange={(e) => e.target.namesecond.value}
        />
        <button
          type="submit"
        >
          Remember me
        </button>
      </form>
      <div className="mini_container">
        <div className="desc">
          Player 2:
          {nameSecond}
        </div>
      </div>
    </div>
  );
}
