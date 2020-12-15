import React from 'react';

const EmojiSection = props => {
    return (
        <div className='EmojiMatrixSection'>

            <div className='EmojiMatrix'>
                {props.matrix.map((row, rowIdx) =>
                    <div
                        key={rowIdx}
                        className='EmojiRow'>
                        {
                            row.map((rowItem, itemIdx) =>
                                <div
                                    key={itemIdx}
                                    onClick={() => props.clicked(rowItem)}
                                    className='EmojiItem'>{rowItem}
                                </div>
                            )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmojiSection;