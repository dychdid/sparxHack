import modules from '@modules';

import { BaseButtonProps } from '@azalea/buttons';

const { React } = modules.common;

export const BaseButton = ({ text, trailing = null, className = '', onClick, ...props }: BaseButtonProps) => {
    return <div
        className={className}
        onClick={onClick}
        style={{ ...(props.style ?? {}), userSelect: 'none' }}
        {...props}
    >
        {text}
        {trailing && ' '}
        {trailing}
    </div>
}

export const SolidButton = (props: Arguments<typeof BaseButton>[0]) => {
    return <BaseButton 
        {...props}
        className={`_ButtonBase_10evl_1 _FocusTarget_1nxry_1 
        _ButtonMd_10evl_27 _ButtonBlue_10evl_51 
        _ButtonContained_10evl_81` + ' ' + (props.className ?? '')}
    />
}

export const DropdownButton = (props: Arguments<typeof BaseButton>[0]) => {
    return <BaseButton 
        {...props}
        className={'_DropdownMenuItem_tgmt4_59' + ' ' + (props.className ?? '')}
    />
}