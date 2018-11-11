import React, { Component } from 'react';
import { Input, Divider } from 'antd';

export class Configuration extends Component {
    state = this.props.config;

    onBackendUrlChange = (e) => {
        const val = e.target.value;
        this.setState((prev) => {
            const newState = { ...prev, url: val };
            this.props.onChange(newState);
            return newState;
        });
    };

    onPredictionKeyChange = (e) => {
        const val = e.target.value;
        this.setState(prev => {
            const newState = { ...prev, key: val };
            this.props.onChange(newState);
            return newState;
        });
    };

    onIterationIdChange = (e) => {
        const val = e.target.value;
        this.setState(prev => {
            const newState = { ...prev, iteration: val };
            this.props.onChange(newState);
            return newState;
        });
    };

    render() {
        const { url, key, iteration } = this.state;
        return (
            <div>
                <label>Backend
                    <Input value={url} onChange={this.onBackendUrlChange} />
                </label>
                <Divider />
                <label>Iteration Id
                    <Input value={iteration} onChange={this.onIterationIdChange} />
                </label>
                <Divider />
                <label>Prediction Key
                    <Input value={key} onChange={this.onPredictionKeyChange} />
                </label>
            </div>
        );
    }
}