import React from 'react';
import Slider from "./Slider";
import Cardi from "./Cardi";
import InCard from "./InCard";
function Dashboard(props) {
    return (
        <div>

             <InCard/>
                    <br/>
                    <Cardi/>
                    <Slider/>

        </div>
    );
}

export default Dashboard;