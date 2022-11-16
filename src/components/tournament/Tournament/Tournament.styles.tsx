import styled from "styled-components";

import { TournamentStyledProps as Props } from "./Tournament.types";

const TournamentStyled = styled.div<Props>`
  .Tournament {
    &__header {
      padding-left: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      border-bottom: 1px solid #f0f0f0;
      &__menu {
        flex: 1;
        display: flex;
        justify-content: end;
      }
      &__submenu {
        &__logo {
          padding-left: 0.6rem;
        }
      }
    }

    &__body {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      min-height: calc(98vh - 3.4rem);
      &__card {
        min-width: 75vw;
        &__title {
          margin-bottom: 1rem;
        }
        &__group {
          margin-bottom: 1rem;
          &__body {
            display: flex;
            justify-content: space-between;
          }
          &__matches {
            flex: 1;
          }
          &__positions {
            flex: 1;
          }
          &__match {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #243447;
            border-radius: calc(0.5rem);
            padding: 1rem;
            margin-bottom: 1rem;
            cursor: pointer;
            &__team {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 6rem;

              &__flag {
                width: 5rem;
                height: 3rem;
                margin-bottom: 0.4rem;
              }
              &__name {
                color: white;
              }
            }
            &__board {
              display: flex;
              justify-content: space-around;
              width: 5rem;
            }
            &__score {
              height: 1.5rem;
              width: 1.5rem;
              border: solid 1px white;
              color: white;
              text-align: center;
            }
            &__date {
              text-align: center;
              color: white;
            }
          }
          &__bonus {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #243447;
            border-radius: calc(0.5rem);
            padding: 1rem;
            cursor: pointer;

            &__text {
              font-size: 1.5rem;
              font-weight: 600;
              line-height: 2rem;
              color: white;
              margin: 0;
            }
          }
          &__container {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          &__positions {
            padding: 0 2rem;
            &__team {
              display: flex;
            }
            &__image {
              width: 1.5rem;
              height: 0.9rem;
              margin-right: 0.4rem;
              margin-top: 0.2rem;
            }
          }
        }
      }
      &__table {
        &__link {
          color: #1890ff;
          cursor: pointer;
        }
      }
      &__header {
      }
    }
    &__footer {
    }
  }
`;

export default TournamentStyled;
