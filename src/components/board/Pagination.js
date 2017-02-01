import React, {PropTypes} from 'react';

const sample=(num)=>{
    let hello=[];
    for(let i=0;i<num;i++){
      hello[i]=i;
    }
    console.log(hello);
        return hello;
}

const Pagination = ({
    paging,
    value,
    onChangepage
}) => (
    <div style={{textAlign: 'center'}}>
        <ul className="pagination">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>

            {sample(paging).map((row, index) => (
                    <li onClick={() => {
                        onChangepage(index,value);
                    }} className="waves-effect" key={index}><a>{index+1}</a></li>
            ))}

            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    </div>
);

/*
 <li className="active"><a href="#!">1</a></li>
 <li className="waves-effect"><a href="#!">2</a></li>
 BoardList.propTypes = {
 onSubmit: PropTypes.func.isRequired,
 onTitle: PropTypes.func.isRequired,
 onChecked: PropTypes.func.isRequired
 };
 */
export default Pagination;