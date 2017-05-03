var TweetBox = React.createClass({
    // 初始化数据，data的数据由state来控制
    getInitialState: function() {
        return {
            data: []
        };
    },
    // 接收一个传入的数据，并将它实时更新到组件的 state 中，以便组件根据数据重新render
    // 只要改变了 state ，react自动执行 render 计算
    handleChange: function (rows) {
        this.setState({
            data: rows
        });
    },
    render: function() {
        return (
            <div className="main">
                {
                    /*展示框*/
                }
                <Listdiv todo={this.state.data}/>
                {
                    /*输入框与提交按钮*/
                }
                <Editdiv onAdd={this.handleChange} todo={this.state.data}/>
            </div>
        );
    }
});
// 输入框与提交按钮
var Editdiv = React.createClass({
    handleAdd: function (e) {
        e.preventDefault();
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputnew;
        var newthing = inputDom.value.trim();
        // 获取传入的TweetBox数据
        var rows = this.props.todo;
        if (newthing !== '') {
            // 更新数据，并使用 onAdd 更新到 TweetBox 组件的 state 中
            rows.push(newthing);
            this.props.onAdd(rows);
        }
        inputDom.value = '';
    },
    render: function(){
        return (
            <div>
                <textarea ref="inputnew"></textarea>
                <input type="button" className="btn" onClick={this.handleAdd} id="todo-new" value="Post"/>
            </div>
        )
    }
});
// Listdiv 组件用于展示列表
var Listdiv = React.createClass({
    render: function(){
        return (
            <div className="container">
            {
                this.props.todo.map(function (item) {
                    return (
                        <p>{item}</p>
                    );
                })
            }
            </div>
        )
    }
});

ReactDOM.render(
    <TweetBox />,
    document.body
);

//
//var MyTitle = React.createClass({
//    getDefaultProps:function() {
//        return {
//            title:"蓝鸥"
//        };
//    },
//    render:function() {
//        return <h1>{this.props.title}</h1>
//    }
//});
//ReactDOM.render(
//    <MyTitle />,
//    document.getElementById("container")
//);
//
//var Ddd = React.createClass({
//    getDefaultProps:function(){
//        return{
//            title:"改变属性默认值设置"
//        };
//    },
//    render:function(){
//        return (<div>{this.props.title}</div>)
//    }
//});
//
//ReactDOM.render(
//    <Ddd />,
//    document.getElementById("changeTitle")
//);