//LIST의 컨테이너가 될 예정.

import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {BoardList, Pagination} from 'components';
import {SelectMenu} from 'components';
import {connect} from 'react-redux';

import {articleListRequest} from 'actions/board';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
            count: 10,  //한페이지당 보여질 게시글 수
            paging: -1,     //페이지네이션의 총 번호이자 끝 번호
            pageNum: 0,  //현재페이지
        };

        //   this.handleChange = this.handleChange.bind(this);
        this.changPage = this.changPage.bind(this);
    }

    componentDidMount() {

        this.props.articleListRequest(this.state.pageNum, this.state.count).then(
            () => {
                console.log("Board articleListRequest Success!222");
                let num = parseInt(this.props.count / this.state.count);
                console.log(num);
                if (0 != this.props.count % this.state.count) {
                    this.setState({paging: num + 1});
                } else {
                    this.setState({paging: num});
                }

            }
        );
    };

    //SelectMenu에 대한 페이징 처리.
    /*    handleChange(value) {
     console.log(value);

     let num = parseInt(this.props.count / value);
     console.log(num);
     if (0 != this.props.count % value) {
     this.setState({
     paging: num + 1,
     count: value
     });
     } else {
     this.setState({
     paging: num,
     count: value
     });
     }
     }
     */
    //파라미터 : 현재페이지, 페이지당 보여질 게시글 수
    changPage(page, value) {

        let num = parseInt(this.props.count / value);
        console.log(num);
        if (0 != this.props.count % value) {
            this.setState({
                paging: num + 1,
                count: value,
                pageNum: page
            });
        } else {
            this.setState({
                paging: num,
                count: value,
                pageNum: page
            });
        }


        this.props.articleListRequest(page, value).then(
            () => {
                console.log("Board articleListRequest Success!222");
                let num = parseInt(this.props.count / this.state.count);
                console.log(num);
                if (0 != this.props.count % this.state.count) {
                    this.setState({paging: num + 1});
                } else {
                    this.setState({paging: num});
                }

            }
        );
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <div>
                <div className="list-header">
                    <Link className="link-post" to="/board/post">POST</Link>
                    <SelectMenu onChangepage={this.changPage} value={this.state.count}/>
                </div>

                <BoardList handleChange={this.handleChange}
                           fixedHeader={this.state.fixedHeader}
                           stripedRows={this.state.stripedRows}
                           showRowHover={this.state.showRowHover}
                           selectable={this.state.selectable}
                           multiSelectable={this.state.multiSelectable}
                           enableSelectAll={this.state.enableSelectAll}
                           deselectOnClickaway={this.state.deselectOnClickaway}
                           showCheckboxes={this.state.showCheckboxes}
                           height={this.state.height}
                           tableData={this.props.tableData}

                />
                <Pagination onChangepage={this.changPage} paging={this.state.paging} value={this.state.count}/>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        count: state.board.list.count,
        tableData: state.board.list.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        articleListRequest: (pageNumber, articleCount) => {
            return dispatch(articleListRequest(pageNumber, articleCount));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
