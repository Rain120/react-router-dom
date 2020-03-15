/*
 * @Author: Rainy
 * @Date: 2020-03-10 16:45:44
 * @LastEditors: Rainy
 * @LastEditTime: 2020-03-15 14:28:38
 */

import React from 'react';

// base type
export interface AnyObject {
    [key: string]: any;
}

export type AnyArray = Array<any>;

export type CustomArray<T> = Array<T>;

export type AnyFunction = () => any;

export type NullFunction = () => null;
