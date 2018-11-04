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
    }

    onSubscriptionKeyChange = (e) => {
        const val = e.target.value;
        this.setState(prev => {
            const newState = { ...prev, key: val };
            this.props.onChange(newState);
            return newState;
        });
    }

    render() {
        const { url, key } = this.state;
        return (
            <div>
                <label>Backend
                    <Input value={url} onChange={this.onBackendUrlChange} />
                </label>
                <Divider />
                <label>Subscription Key
                    <Input value={key} onChange={this.onSubscriptionKeyChange} />
                </label>
            </div>
        );
    }
}