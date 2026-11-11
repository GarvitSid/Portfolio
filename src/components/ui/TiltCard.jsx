import { usePointerGlow } from '../../hooks/usePointerGlow';

/**
 * Interactive surface with pointer-following spotlight border, optional 3D tilt (default 6deg),
 * specular glare, and optional subtle interior ambient glow.
 */
const TiltCard = ({
  children,
  className = '',
  innerClassName = '',
  as: Component = 'article',
  maxTilt = 6,
  ambientGlow = false,
}) => {
  const cardRef = usePointerGlow({ maxTilt });
  const hasTilt = maxTilt > 0;

  return (
    <Component
      ref={cardRef}
      style={
        hasTilt
          ? {
              transform:
                'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
            }
          : undefined
      }
      className={`relative rounded-xl ${
        hasTilt
          ? 'transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none'
          : ''
      } ${className}`}
    >
      {/* Pointer-following spotlight border ring (unclipped outside padding edge) */}
      <div
        aria-hidden="true"
        className="pointer-fine-only pointer-events-none absolute -inset-px z-30 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: 'var(--pointer-active, 0)',
          background:
            'radial-gradient(380px circle at var(--pointer-x, -999px) var(--pointer-y, -999px), rgba(34, 211, 238, 0.38), transparent 45%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Clipped inner surface for media, glare, and ambient glow */}
      <div className={`relative h-full w-full overflow-hidden rounded-[inherit] ${innerClassName}`}>
        {hasTilt && (
          <div
            aria-hidden="true"
            className="pointer-fine-only pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
            style={{
              opacity: 'var(--pointer-active, 0)',
              background:
                'radial-gradient(280px circle at var(--pointer-x, -999px) var(--pointer-y, -999px), rgba(255, 255, 255, 0.055), transparent 60%)',
            }}
          />
        )}

        {ambientGlow && (
          <div
            aria-hidden="true"
            className="pointer-fine-only pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: 'var(--pointer-active, 0)',
              background:
                'radial-gradient(320px circle at var(--pointer-x, 70%) var(--pointer-y, 20%), rgba(34, 211, 238, 0.08), transparent 65%)',
            }}
          />
        )}

        {children}
      </div>
    </Component>
  );
};

export default TiltCard;
