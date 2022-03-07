const composeFontSize = ({
    scaleMax = 100,
    scaleMin = 100,
    priorityWidth = undefined,
    precision = 3,
    widthMax,
    widthMin
}: {
    scaleMax?: number;
    scaleMin?: number;
    priorityWidth?: number;
    precision?: number;
    widthMax: number;
    widthMin: number;
}): string => {
    const baseScale = 25;
    const baseAbsoluteSize = 16;

    const medianWidth = priorityWidth
        ? priorityWidth
        : (widthMax - widthMin) / 2 + widthMin; // Mid way between widths

    const widthDiff = widthMax - widthMin;
    const median = ((medianWidth - widthMin) / widthDiff) * 100;

    const scaleDiff = (scaleMax - scaleMin) / 100; // Turn into decimal
    const relativeDiff = scaleDiff * baseScale;

    // The scale at the median mark. Is in percentage form (not decimal)
    const medianScaleDiff = (relativeDiff * median) / 100;

    // Needs to be converted to decimal equivalent of the percentage
    const absoluteMedianDiff = (medianScaleDiff * baseAbsoluteSize) / 100;

    // Convert median to decimal
    const medianWidthDiff = (widthDiff * median) / 100;

    /*
    Finding the intersect
   */

    // Width at which scaleDiff is 0
    const zeroGradientWidth = widthMax - medianWidthDiff;

    // Rise over run -- scale/width
    const gradient = absoluteMedianDiff / medianWidthDiff;

    // 0 = mx + b -- Flip into negative to get b (intersect)
    const intersect = -1 * gradient * zeroGradientWidth;

    // Gradient diff multiplied by 100vw -- taking the 100
    const viewWidthScale = `${(gradient * 100).toFixed(precision)}vw`;

    // Static scale, based on 16px -- will not scale with user-agent styles
    const staticScale = `(${viewWidthScale} + ${intersect.toFixed(
        precision
    )}px)`;

    // Accounts for the max scale being higher than 100%
    const absoluteMaxScale = (scaleMax / 100) * baseScale;

    // Dynamic scaling with user-agent font-size -- turns into a percentage
    const dynamicScale = `${(absoluteMaxScale - medianScaleDiff).toFixed(
        precision
    )}%`;

    return `calc(${dynamicScale} + ${staticScale})`;
};

export { composeFontSize };
