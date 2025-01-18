import React, { useContext } from 'react'
import { faRedo, faFastBackward, faPlay, faPause, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import Button from './Button'
import { MyContext } from '../../../context/myContext';


const ContentOptions = () => {

    const { setClickDataButton, play, reset } = useContext(MyContext);

    return (
        <>
            <div className="header-content-options">
                <div className="options-1">
                    <Button className={"btn buttin-1"} icon={faRedo} text="New Data" onClickFun={setClickDataButton} setValue={true} />
                    <Button className={"btn buttin-2"} icon={faFastBackward} text="Reset" onClickFun={reset} />
                    <Button className={"btn buttin-3"} icon={faPlay} text="Play" onClickFun={play} />
                </div>
                {/* <div className="options-2">
                    <Button className={"btn buttin-4"} icon={faPause} text="Pause" />
                    <Button className={"btn buttin-5"} icon={faStepForward} text="Step" />
                    <Button className={"btn buttin-6"} icon={faFastForward} text="Finish" />
                </div> */}
            </div>
        </>
    );
}

export default ContentOptions;
