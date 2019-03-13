import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";


class UiProgramming extends React.Component {
  constructor(props){
    super();
    this.state = {
      rooms: 1,
      adults: 2,
      childrens: 0
    }
  }

  increaseRoomCnt = () => {
     this.setState({
       rooms: this.state.rooms < 5 ? this.state.rooms + 1 : this.state.rooms
     }, () => {
      this.setState({
        adults: (this.state.adults < this.state.rooms) ? this.state.adults + 1 : this.state.adults
      })
    });
  }

  reduceRoomCnt = () => {
    this.setState({
       rooms: this.state.rooms > 1 ? this.state.rooms - 1 : this.state.rooms
     }, () => {
      this.setState({
        adults: (this.state.adults > this.state.rooms * 4) ? this.state.rooms * 4 : this.state.adults,
      }, () => {
        this.setState({
           childrens: (this.state.childrens > 0 && (this.state.adults + this.state.childrens > this.state.rooms * 4)) ? 0 : this.state.childrens
        })
      })
    });
  }

  increaseAdultCnt = () => {
    this.setState({
        adults: (this.state.adults <= 1 || this.state.adults <= this.state.rooms * 4) ? this.state.adults + 1 : this.state.adults
    }, () => {
        this.setState({ 
          childrens: (this.state.childrens > 0 && this.state.adults + this.state.childrens > this.state.rooms * 4) ? this.state.childrens - 1 : this.state.childrens
        }); 

    })
  }

  reduceAdultCnt = () => {
    this.setState({
        adults: (this.state.adults + this.state.childrens > this.state.rooms) ? this.state.adults - 1 : this.state.adults
    }, () => {
        this.setState({ 
          childrens: (this.state.childrens > 0 && (this.state.adults + this.state.childrens >= this.state.rooms * 4)) ? this.state.childrens - 1 : this.state.childrens
        }); 

    })
  }

  increaseChildCnt = () => {
    this.setState({
       childrens: (this.state.childrens + this.state.adults <= this.state.rooms * 4) ? this.state.childrens + 1 : this.state.childrens
    })
  }

  reduceChildCnt = () => {
    this.setState({
       childrens: (this.state.childrens > 0 && (this.state.adults + this.state.childrens > this.state.rooms * 4)) ? this.state.childrens - 1 : this.state.childrens
    })
  }

render() {
    const { rooms, adults, childrens } = this.state;

    return (
      <div className="content text-center">
      <div style={{marginTop: 10, fontSize: 25, fontWeight: "bold"  }}>Choose number of people</div>
        <div  style={{border: "thin solid #000"}}>
          <Row>
             <Col>
             <div style={{marginTop: 20, fontWeight: "bold"}}>Rooms</div>
             </Col>
             <Col>
             <div className="quantity buttons_added">
              <button type="button" className="btn btn-primary" onClick={this.reduceRoomCnt} disabled={rooms < 2}>-</button>
              <button type="button" className="btn btn-link" disabled style={{fontWeight: "bold", fontSize: 20}}>{rooms}</button>
              <button type="button" className="btn btn-danger" onClick={this.increaseRoomCnt} disabled={rooms === 5}>+</button>
            </div>  
             </Col>
          </Row>
          <Row>
             <Col>
             <div style={{marginTop: 20, fontWeight: "bold"}}>Adults</div>
             </Col>
             <Col>
             <div className="quantity buttons_added">
              <button type="button" className="btn btn-primary" onClick={this.reduceAdultCnt} disabled={adults < 1 || adults + childrens === rooms}>-</button>
              <button type="button" className="btn btn-link" disabled style={{fontWeight: "bold", fontSize: 20}}>{adults}</button>
              <button type="button" className="btn btn-danger" onClick={this.increaseAdultCnt} disabled={adults >=  rooms*4}>+</button>
             </div>  
             </Col>
            </Row>
          <Row>
             <Col>
             <div style={{marginTop: 20, fontWeight: "bold"}}>Childrens</div>
             </Col>
             <Col>
             <div className="quantity buttons_added">
              <button type="button" className="btn btn-primary" onClick={this.reduceChildCnt} disabled={childrens < 1 || adults + childrens === rooms}>-</button>
              <button type="button" className="btn btn-link" disabled style={{fontWeight: "bold", fontSize: 20}}>{childrens}</button>
              <button type="button" className="btn btn-danger" onClick={this.increaseChildCnt} disabled={adults+childrens >=  rooms*4}>+</button>
            </div>  
             </Col>
          </Row>
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {}
} 

export default connect(mapStateToProps, mapDispatchToProps)(UiProgramming);
