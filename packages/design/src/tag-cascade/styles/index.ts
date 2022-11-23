import styled from 'styled-components';

interface WrapProps {
  prefixCls: string;
}

const preFixClsFun = (props: Pick<WrapProps, 'prefixCls'>) => props.prefixCls;

export const Wrap = styled.div<WrapProps>`
  & .${preFixClsFun} {
    display: inline-flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 0;
    gap: 4px 6px;
    color: #7f7ea5;
    .${preFixClsFun}-tag {
      line-height: 24px;
      border-radius: 9999px;
      padding: 0 12px;
      cursor: pointer;
      transition: all 0.5s;

      &.${preFixClsFun}-active {
        color: #fff;
        background: #817af2;
      }

      .${preFixClsFun}-child-active {
        color: #817af2;
      }

      &:not(.${preFixClsFun}-active):hover {
        background-color: #f2f1fd;
      }
    }
  }
  .${preFixClsFun}-cascade-popover {
    .remai-popover-inner {
      padding: 4px;
    }
  }
`;
