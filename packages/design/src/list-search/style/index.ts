import styled from 'styled-components';

interface WrapProps {
  prefixCls: string;
}

const preFixClsFun = (props: Pick<WrapProps, 'prefixCls'>) => props.prefixCls;

export const Wrap = styled.div<WrapProps>`
  display: inline-flex;
  min-width: 300px;
  & .${preFixClsFun} {
    display: inline-flex;
    flex: 1;
    padding: 2px;
    padding-left: 12px;
    font-size: 14px;
    line-height: 1.5715;
    border: 1px solid #817af2;
    overflow: hidden;
    border-radius: 20px;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 0 0 4px 0 rgba(129, 122, 242, 0.2), 0 0 8px 0 rgba(129, 122, 242, 0.2);
    }

    .${preFixClsFun}-input-wrap {
      display: flex;
      flex: 1;
      align-items: center;
      margin-right: 8px;

      .${preFixClsFun}-input {
        display: block;
        width: 100%;
        min-height: 32px;
        height: 100%;
        color: #575689;
        font-size: 14px;
        line-height: 1.5715;
        border: none;
        outline: none;
      }
      .${preFixClsFun}-clear {
        display: flex;
        align-items: center;
        width: 18px;
        margin-left: 11px;

        .${preFixClsFun}-clear-icon {
          color: #a6a6c1;
          cursor: pointer;
          &:hover {
            color: #817af2;
          }
        }
      }
    }

    .${preFixClsFun}-search-btn {
      font-size: 14px;
      border-radius: 20px;
      padding: 4px 16px;
      color: #fff;
      border: 1px solid #817af2;
      background: #817af2;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        color: #fff;
        border-color: #b1a8ff;
        background: #b1a8ff;
      }
    }

    .${preFixClsFun}-hidden {
      display: none;
    }
  }
`;
