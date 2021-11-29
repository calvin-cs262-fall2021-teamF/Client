/*
 * This is from an open source project (found at https://github.com/michaeljstevens/react-native-stopwatch-timer/tree/252d08c49362b8c8926fe146409e133dedce0424)
 */
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { formatTimeString } from "./utils";

let duration = 0;


class StopWatch extends Component {
  static propTypes = {
    start: PropTypes.bool,
    reset: PropTypes.bool,
    msecs: PropTypes.bool,
    options: PropTypes.object,
    laps: PropTypes.bool,
    getTime: PropTypes.func,
    startTime: PropTypes.number,
    getMsecs: PropTypes.func,
  };

  constructor(props) {
    super(props);
    const { startTime } = props;
    this.state = {
      startTime: null,
      stopTime: null,
      pausedTime: null,
      started: false,
      elapsed: startTime || 0,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
    const width = props.msecs ? 220 : 150;
    this.defaultStyles = {
      container: {
        backgroundColor: "#000",
        padding: 5,
        borderRadius: 5,
        width: width,
      },
      text: {
        fontSize: 30,
        color: "#FFF",
        marginLeft: 7,
      },
    };
  }

  componentDidMount() {
    if (this.props.start) {
      this.start();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.start) {
      this.start();
    } else {
      this.stop();
    }
    if (newProps.reset) {
      this.reset();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  start() {
    if (this.props.laps && this.state.elapsed) {
      let lap = new Date() - this.state.stopTime;
      this.setState({
        stopTime: null,
        pausedTime: this.state.pausedTime + lap,
      });
    }

    this.setState({
      startTime: this.state.elapsed
        ? new Date() - this.state.elapsed
        : new Date(),
      started: true,
    });

    this.interval = this.interval
      ? this.interval
      : setInterval(() => {
          this.setState({ elapsed: new Date() - this.state.startTime });
        }, 1);
  }

  stop() {
    if (this.interval) {
      if (this.props.laps) {
        this.setState({ stopTime: new Date() });
      }
      duration = this.interval;

      try{


      const response = await fetch("http:")
      const json = await response.json();
      return json;

    } catch (error) {console.error(error);}
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ started: false });
  }

  reset() {
    const { startTime } = this.props;
    this.setState({
      elapsed: startTime || 0,
      startTime: null,
      stopTime: null,
      pausedTime: null,
    });
  }

  formatTime() {
    const { getTime, getMsecs, msecs } = this.props;
    const now = this.state.elapsed;
    const formatted = formatTimeString(now, msecs);
    if (typeof getTime === "function") {
      getTime(formatted);
    }
    if (typeof getMsecs === "function") {
      getMsecs(now);
    }
    return formatted;
  }

  render() {
    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return (
      <View ref="stopwatch" style={styles.container}>
        <Text style={styles.text}>{this.formatTime()}</Text>
      </View>
    );
  }
}

export default StopWatch;
