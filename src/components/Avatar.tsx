import styles from "./Avatar.module.css";
import {AvatarProps} from "../types.ts"

export function Avatar({hasBorder = true, src, alt}:AvatarProps){
    return (
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
      />

  );
}
