import si from "systeminformation"; // Import systeminformation

// 1. Alphabetize (orders alphabetically) the keys in the request JSON
export const alphaData = (req, res) => {
  const input = req.body;
  const sorted = {};
  Object.keys(input)
    .sort()
    .forEach((key) => {
      sorted[key] = input[key];
    });
  res.status(200).json(sorted);
};

// 2. Flatten arrays in input
export const flattenData = (req, res) => {
  const input = req.body;
  const flattened = {};

  Object.keys(input).forEach((key) => {
    const value = input[key];
    if (Array.isArray(value)) {
      flattened[key] = value.join(",");
    } else {
      flattened[key] = value;
    }
  });

  res.json(flattened);
  res.status(200).json(sorted);
};

// 3. Status
export const statusData = async (req, res) => {
  try {
    const mem = await si.mem();
    const cpu = await si.currentLoad();

    const memUsedPct = ((mem.total - mem.free) / mem.total) * 100;
    const cpuUsedPct = cpu.currentLoad;

    res.json({
      "mem-used-pct": memUsedPct.toFixed(1), 
      "cpu-used-pct": cpuUsedPct.toFixed(1),
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve system information" });
    console.log(error);
  }
};
