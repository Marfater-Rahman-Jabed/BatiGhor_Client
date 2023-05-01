import React from 'react';
import eid1 from '../../Assests/Eid/eid1.jpg'
import eid2 from '../../Assests/Eid/eid2.jpg'
import eid3 from '../../Assests/Eid/eid3.jpg'
import eid4 from '../../Assests/Eid/eid4.jpg'
import eid5 from '../../Assests/Eid/eid5.jpg'
import eid6 from '../../Assests/Eid/eid6.jpg'
import eid7 from '../../Assests/Eid/eid7.jpg'
import eid8 from '../../Assests/Eid/eid8.jpg'
import eid9 from '../../Assests/Eid/eid9.jpg'

const EidActivitties = () => {
    const EidsCollection = [eid1, eid2, eid3, eid4, eid5, eid6, eid7, eid8, eid9, eid1, eid2, eid3]
    return (

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {
                EidsCollection.map((eid, i) => <div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={eid} alt="" />
                    </div>
                </div>)
            }
        </div>

    );
};

export default EidActivitties;