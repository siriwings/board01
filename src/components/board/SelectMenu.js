import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectMenu = ({
    value,
    onChangepage
    //onChange
}) => (
    <div className="select-menu">
        <SelectField
            className="select-menu"
            floatingLabelText="Show Count"
            value={value}
        >
            <MenuItem name="pretty" onTouchTap={()=>{onChangepage(0,10)}} value={10}  primaryText="Show 10"/>
            <MenuItem name="pretty" onTouchTap={()=>{onChangepage(0,20)}}  value={20} primaryText="Show 20"/>
            <MenuItem name="pretty" onTouchTap={()=>{onChangepage(0,30)}} value={30}  primaryText="Show 30"/>
        </SelectField>
    </div>
);

/*

 BoardList.propTypes = {
 onSubmit: PropTypes.func.isRequired,
 onTitle: PropTypes.func.isRequired,
 onChecked: PropTypes.func.isRequired
 };
 */
export default SelectMenu;
