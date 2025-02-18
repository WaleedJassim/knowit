'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '~/lib/utils';

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
			className
		)}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn('aspect-square h-full w-full', className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(
			'flex h-full w-full items-center justify-center rounded-full bg-muted',
			className
		)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

interface AvatarData {
	src?: string;
	alt?: string;
	fallback?: React.ReactNode;
}

interface AvatarGroupProps {
	avatars: AvatarData[];
	maxDisplay?: number;
	className?: string;
	avatarType?: string;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
	avatars,
	maxDisplay = 3,
	className,
	avatarType,
}) => {
	const displayAvatars = avatars.slice(0, maxDisplay);
	const extraCount = avatars.length - maxDisplay;

	return (
		<div className={cn('flex items-center gap-2', className)}>
			<div className="flex">
				{displayAvatars.map((avatar, index) => (
					<Avatar
						key={index}
						className="w-7 h-7"
						style={{
							zIndex: displayAvatars.length - index,
							marginLeft: index !== 0 ? '-0.5rem' : '0',
						}}
					>
						<AvatarImage src={avatar.src} alt={avatar.alt} />
						<AvatarFallback>{avatar.fallback}</AvatarFallback>
					</Avatar>
				))}
			</div>
			{extraCount > 0 && (
				<div className="text-xs font-medium flex items-center gap-1">
					<p>+{extraCount}</p>
					<p>{avatarType}</p>
				</div>
			)}
		</div>
	);
};

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage };
