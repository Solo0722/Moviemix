import { Avatar, List } from "antd";
import { useEffect, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
import Loading from "../utils/loadingAnimation";

const PopularActors = () => {
  const { popularActors, getPopularActors } = useContext(GlobalContext);
  useEffect(() => {
    getPopularActors();
  }, []);

  return (
    <PopularActorsWrapper>
      <h2>Popular movie stars</h2>
      {!popularActors ? (
        <Loading />
      ) : (
        <ListWrapper>
          <List>
            {popularActors?.results?.map((actor, i) => (
              <List.Item key={i}>
                <p style={{ marginRight: "10px" }}>{i + 1}</p>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={
                        "https://image.tmdb.org/t/p/w45/" + actor.profile_path
                      }
                    />
                  }
                  title={<a href="">{actor.name}</a>}
                  description={<p>Popularity: {actor.popularity}</p>}
                />
              </List.Item>
            ))}
          </List>
        </ListWrapper>
      )}
    </PopularActorsWrapper>
  );
};

const PopularActorsWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
  margin: 30px 0;
`;

const ListWrapper = styled.div``;

export default PopularActors;
