/*
 * @Author: Rainy
 * @Date: 2020-03-10 16:45:44
 * @LastEditors: Rainy
 * @LastEditTime: 2020-03-15 23:03:24
 */

// base type
export interface AnyObject {
    [key: string]: any;
}

export type AnyArray = Array<any>;

export type CustomArray<T> = Array<T>;

export type AnyFunction = () => any;

export type NullFunction = () => null;

export type WithParamsFunction = (...args: any) => null;
