export const itemStyle = {
    background: '#f0ebe1',
    marginBottom: '5px',
    padding: '10px 20px',
    borderRadius: '10px'
};

export const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#85662b',
    cursor: 'pointer'
};

export const contentStyle = {
    color: '#8b7f75',
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0,1,0,1)'
};

export const show = {
    maxHeight: 0,
    color: '#8b7f75',
    overflow: 'hidden',
    transition: 'all 0.2s cubic-bezier(1,0,1,0)'
};

export const hide = {
    height: 'auto',
    maxHeight: 9999,
    transition: 'all 0.2s cubic-bezier(1,0,1,0)'
};
