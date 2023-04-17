import ErrorImage from "../../../../assets/images/404.jpg";
import Styles from "../../../Home/TodosContainer.component/MUI_Container/todocontainer.module.scss";
import NoConnection from "../../../../assets/images/noconnection.avif";
import {
  useGetDataQuery,
  useGetNewDataQuery,
  useFetchTodoLengthQuery,
} from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import SkeletonComponent from "../../../card/skeleton.component";
import { fakeArray, userOnline } from "../../../../utils/index.utils";
import { useSelector, useDispatch } from "react-redux";
import itemSlice, { setItems } from "../../../../features/slices/itemSlice";
import type { RootState } from "../../../../features/store/store";
import { Search } from "@mui/icons-material";
import React from "react";
import "./list.component.scss";

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const SearchResualt = (): ReactElement | ReactElement[] => {
  const [text, setText] = React.useState("");
  const TIME = 300;
  const timer = React.useRef<NodeJS.Timeout>();
  const [query, setQuery] = useState("");
  const itemsArry = useSelector((state: RootState) => state.itemSlice.items);
  //const onEdit = useSelector((state: RootState) => state.itemSlice.editOperate);

  const dispatch = useDispatch();

  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);
  //const [content, setContent] = useState<any>(null);
  const {
    data: firstData,
    isSuccess,
    isLoading,
    isError: errorInFirstData,
  } = useGetDataQuery();
  const { data: newData, isError: errorInNewData } = useGetNewDataQuery(page);
  const { data: dataLength } = useFetchTodoLengthQuery();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setItems(firstData));
    }
  }, [isSuccess]);

  //////////////////////////////////
  const fetchMoreData = async () => {
    dispatch(setItems([...itemsArry, ...newData]));
    if (itemsArry.length + newData.length === dataLength) {
      setHasMore(false);
    }
    setPage(page + 1);
  };
  console.log(itemsArry);

  ///////////////////////////////////////////////
  return (
    <>
      {/* <div className="flex">
        <input
          autoFocus
          type="text"
          className="input-search"
          placeholder="Search !"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Search fontSize="large" />
      </div> */}
      <div>
        <div className="flex">
          <input
            autoFocus
            type="text"
            className="input-search"
            placeholder="Search !"
            onChange={(event) => {
              setQuery(event.target.value);
              const value = event.currentTarget.value;
              clearTimeout(timer.current);
              setText(value);
              timer.current = setTimeout(() => {
                setQuery(value);
              }, TIME);
            }}
          />
          {/* <Search fontSize="large" /> */}
        </div>
        {/* <input
          placeholder="Enter Post Title"
          onChange={(event) => setQuery(event.target.value)}
        /> */}
        {/* {itemsArry
          .filter((post: { title: string }) => {
            if (query === "") {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map(
            (
              post: {
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                author:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <div className="box" key={index}>
                <p>{post.title}</p>
                <p>{post.author}</p>
              </div>
            )
          )} */}
        {itemsArry
          .filter((post: { title: string }) => {
            if (query === "") {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map(
            (
              post: {
                description: any;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                id: string | number;
              },
              index: Key | null | undefined
            ) => (
              <Cart
                setterDelete={setModalDelete}
                state={modalDelete}
                key={index}
                info={post}
                id={post.id}
              />
            )
          )}
      </div>
    </>
  );
};

export default SearchResualt;
