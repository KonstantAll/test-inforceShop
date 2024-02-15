import {useCallback} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import SingleItem from "../singleItem/SingleItem";
import Spinner from '../spinner/Spinner';
import AddingItemModal from "../modal/AddingItemModal";
import {useGetItemsQuery, useDeleteItemMutation} from '../../api/apiSlice'

import './itemsList.scss';
import {Form} from "react-router-dom";

const ItemsList = () => {

    const {
        data: items = [],
        isLoading,     // true если в первый ли раз обращаемся к серверу
        isError
    } = useGetItemsQuery();

    const [deleteItem] = useDeleteItemMutation();

    const onDelete = useCallback((id) => {
        deleteItem(id)
        // eslint-disable-next-line  
    }, []);

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderItemsList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="item">
                    <h5 className="text-center mt-5">No items yet</h5>
                </CSSTransition>
            )
        }

        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition 
                    key={id}
                    timeout={500}
                    classNames="item">
                    <>
                        <SingleItem id={id} {...props} onDelete={() => onDelete(id)}/>
                    </>

                </CSSTransition>
            )
        })
    }

    const elements = renderItemsList(items);
    return (
        <TransitionGroup component="ul">
            {elements}
        </TransitionGroup>
    )
}
export default ItemsList;